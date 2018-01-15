export class UserProfile {
  user_name: string;
  first_name: string;
  family_name: string;
  description: string;
  profile_photo: string;
  gender: string;
  age: number;

  constructor(first_name: string, family_name: string) {
    this.first_name = first_name;
    this.family_name = family_name;
  }
}
