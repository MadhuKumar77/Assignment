import React from 'react'
import {Marker} from 'react-native-maps';

class DragableMarker extends React.PureComponent {
    state = {  }

    componentDidMount(){
        setTimeout(() => this.marker.showCallout(), 0);
    }
    render() { 
        return ( <Marker
            draggable
            calloutVisible={true}
            coordinate={{
              latitude: this.props.regionOfMap.latitude,
              longitude: this.props.regionOfMap.longitude,
            }}
            ref={ref => { this.marker = ref; }}
            onDragEnd={e => this.props.changePin(e.nativeEvent.coordinate)}
            title={'Your Loaction'}
            description={'Please place the pin accurately on the map'}
          />  );
    }
}
 
export default DragableMarker;