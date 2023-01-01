import AccelerationSvg from "../assets/acceleration.svg";
import SpeedSvg from "../assets/speed.svg";
import ExchangeSvg from "../assets/exchange.svg";
import ForceSvg from "../assets/force.svg";
import GasolineSvg from "../assets/gasoline.svg";
import HybridSvg from "../assets/hybrid.svg";
import EnergySvg from "../assets/energy.svg";
import PeopleSvg from "../assets/people.svg";
import CarSvg from "../assets/car.svg";


export const getAccessoryIcon = (type: string) => {

  switch (type) {
    case 'acceleration':
      return AccelerationSvg;
    case 'speed':
      return SpeedSvg;
    case 'exchange':
      return ExchangeSvg;
    case 'turning_diameter':
      return ForceSvg;
    case 'gasoline_motor':
      return GasolineSvg;   
    case 'hybrid_motor':
      return HybridSvg;    
    case 'electric_motor':
      return EnergySvg; 
    case 'seats':
      return PeopleSvg;    
    default:
      return CarSvg;
  }
}