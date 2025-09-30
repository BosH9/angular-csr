export interface User {
  name: string;
  age: number;
  address?: Address;
}

export interface Address {
  city: string;
  pinCode: number;
}
