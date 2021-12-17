import {Profession} from "./employee/profession";

export class ProfessionConverter {

  constructor() {
  }

  public convertToEnum = (profession: string | null): string | null => {

    if (profession === 'Software Engineer') {
      return 'SOFTWARE_ENGINEER';
    }

    if (profession === 'Quality Assurance') {
      return 'QA';
    }

    if (profession === 'Human Resources') {
      return 'HR';
    }

    if (profession === 'Product Manager') {
      return 'PM';
    }

    if (profession === 'Chief Executive Office') {
      return 'CEO';
    }

    return null;
  }

  public convertFromEnumToString = (professionName: string | null): string | null => {

    if (professionName === 'PM') {
      return Profession.PM;
    }

    if (professionName === 'CEO') {
      return Profession.CEO;
    }

    if (professionName === 'QA') {
      return Profession.QA;
    }

    if (professionName === 'SOFTWARE_ENGINEER') {
      return Profession.SOFTWARE_ENGINEER;
    }

    if (professionName === 'HR') {
      return Profession.HR;
    }

    return '';
  }


}
