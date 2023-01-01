import { Car } from "../../database/model/Car";
import { Car as ModelCar } from "../../database/model/Car";

type User = {
  name: string;
  email: string;
  cnh: string;
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      splash: undefined;
      signIn: undefined;
      signUpFirstStep: undefined;
      signUpSecondStep: {
        user: User
      };
      home: undefined;
      carDetails: {
        car: ModelCar
      }
      scheduling: {
        car: Car
      };
      schedulingDetails: {
        car: Car,
        dates: string[]
      };
      confirmation: {
        title: string;
        message: string;
        nextScreenRoute: string;
      };
    }
  }
}