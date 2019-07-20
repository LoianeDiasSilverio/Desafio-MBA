import React, { Component } from "react";
import { Text } from "native-base";
import Styles from '../routes/routes_tab.styles';

class RoutesTabRender extends Component {
  
  render() {
    return (
        <Footer>
        <FooterTab style={{ backgroundColor: '#fff' }}>
          <Button
            vertical
            onPress={() => props.navigation.navigate('firstStack')}
          >
            <Icon
              name="md-home"
              style={navigation.state.index === 0
                ? Styles.iconFooterActived
                : Styles.iconFooterNotActived}
            />
            <Text
              name="md-home"
              style={navigation.state.index === 0
                ? Styles.fontTextFooterActived
                : Styles.fontTextFooterNotActived}
            >
              Meu Sebrae
            </Text>
          

          </Button>
          <Button
            vertical
            onPress={() => props.navigation.navigate('SecondStack')}
          >
            <Icon
              name="md-notifications"
              style={navigation.state.index === 1
                ? Styles.iconFooterActived
                : Styles.iconFooterNotActived}
            />
            <Text
              name="md-notifications"
              style={navigation.state.index === 1
                ? Styles.fontTextFooterActived
                : Styles.fontTextFooterNotActived}
            >
              Dicas
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default RoutesTabRender;