import { createStackNavigator } from "react-navigation";
import TelaInicial from '../home/tela_inicial';
import MainScreenNavigator from '../routes/routes_tab';
import Temas from '../temas/temas';
import PrimeiroDesafio from '../desafios/primeiro/primeiro_desafio';
import SegundoDesafio from '../desafios/segundo/segundo_desafio';
import TerceiroDesafio from '../desafios/terceiro/terceiro_desafio';
import QuartoDesafio from '../desafios/quarto/quarto_desafio';
import Alerts from '../utils/msgs';

const Routes = createStackNavigator(
  {
    Home: {
      screen: TelaInicial
    },
    PrimeiroDesafio: {
      screen: PrimeiroDesafio
    },
    SegundoDesafio: {
      screen: SegundoDesafio
    },
    TerceiroDesafio: {
      screen: TerceiroDesafio
    },
    QuartoDesafio: {
      screen: QuartoDesafio
    },
    Temas: {
      screen: Temas
    },
    MainScreenNavigator: {
      screen: MainScreenNavigator,
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: Alerts.Mensagens.DESAFIOMBA,
      headerStyle: {
        backgroundColor: "#FB6849"
      },
      headerTintColor: "#FFFFFF",
      headerTitleStyle: {
        fontSize: 25,
        fontWeight: "normal"
      }
    }
  }
);

export default Routes;
