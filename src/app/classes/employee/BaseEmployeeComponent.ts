import {Router} from "@angular/router";

export abstract class BaseEmployeeComponent {

  protected constructor(protected router: Router) {
  }

  onReturn(): void {
    this.router.navigate([`employees`]).catch(error => console.log(error));
  }
}
