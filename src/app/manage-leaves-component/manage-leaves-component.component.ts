import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../leave.service'
import { Observable } from 'rxjs/Observable';
import { ConfirmationService } from 'primeng/primeng';
import { debug } from 'util';

@Component({
  selector: 'app-manage-leaves-component',
  templateUrl: './manage-leaves-component.component.html',
  styleUrls: ['./manage-leaves-component.component.css']
})
export class ManageLeavesComponentComponent implements OnInit {
  dataSource;
  displayedCoulumns = ['sno', 'leave_type', 'num_of_days', 'validity', 'carry_forward', 'actions'];
  abc = [];
  leavetype: any;
  noofDays: any;
  validity: any;
  carryforward: any;
  description: any;
  updateleavetype: any;
  updatedescription: any;
  updatenoofDays: any;
  updatevalidity: any;
  updatecarryforward: any;
  getSingleRecord: any;
  id: any;
  isPass:boolean;
  error:any;
  message:any;
  isSuccess:any;
  isError:any;

  constructor(private leaveService: LeaveService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getLeavesTypes();
  }
  getLeavesTypes() {
    this.leaveService.getTypeLeaves().subscribe(data => {
      if (!data) {
        return;
      }
      this.dataSource = data.leave_types;
    },(error => {
      this.error = true;
      if (!error.error.message) {
        this.message = error.message;
      } else {
        this.message = error.error.message;
      }
      this.error = true;
      this.setTimeOutModal();
    }));
  }
  deleteClient(id) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.leaveService.deleteLeavesType(id).subscribe(data => {
          if (!data) {
            return;
          }
          this.getLeavesTypes();
        },(error => {
          this.error = true;
          if (!error.error.message) {
            this.message = error.message;
          } else {
            this.message = error.error.message;
          }
          this.error = true;
        }))
      }
    });

  }
  getData(id) {
    this.abc = this.dataSource.filter(x => x.id == id);
  }
  addLeaveRecord() {
    this.isPass=false;
    this.error = false;
    this.leaveService.addLeaves(this.leavetype, this.description, this.noofDays, this.validity, this.carryforward).subscribe(data => {
      if (!data) {
        return;
      }
      this.isPass=true;
      this.getLeavesTypes();
      this.setTimeOutModal();
      this.clearAddedFields();
    },(error => {
      this.error = true;
      if (!error.error.message) {
        this.message = error.message;
      } else {
        this.message = error.error.message;
      }
      this.error = true;
      this.setTimeOutModal();
    }));
  }
  getTypeUpdate(id) {
    this.id = id;
    this.getSingleRecord = this.dataSource.filter(x => x.id == id);
    this.updateleavetype = this.getSingleRecord[0].leave_type;
    this.updatedescription = this.getSingleRecord[0].description;
    this.updatenoofDays = this.getSingleRecord[0].num_of_days;
    this.updatevalidity = this.getSingleRecord[0].validity;
    this.updatecarryforward = this.getSingleRecord[0].carry_forward;
  }

  updateLeaveType() {
    this.isSuccess=false;
    this.isError=false;
    this.leaveService.updaleavesTypes(this.id, this.updateleavetype, this.updatedescription, this.updatenoofDays, this.updatevalidity, this.updatecarryforward).
      subscribe(data => {
        this.isSuccess=true;
        this.getLeavesTypes();
        this.setTimeOutModal();
      },(error => {
        this.isError = true;
        if (!error.error.message) {
          this.message = error.message;
        } else {
          this.message = error.error.message;
        }
        this.setTimeOutModal();
      }))
  }
  setTimeOutModal() {
    window.setTimeout(function () {
      $(".alert").fadeTo(600, 0).slideUp(600, function () {
        $(this).remove();
      });
    }, 1000);
  }

  clearAddedFields(){
    this.leavetype='';
    this.description='';
    this.noofDays='';
     this.validity=''; 
    this.carryforward='';
  }
}
