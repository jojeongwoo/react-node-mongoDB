import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

import './Hospital.css';

const mapStyles = {
  width: '800px',
  height: '400px',
  margin: '0 auto',
  top: '8%'
};

export class Hospital_three extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
      return (
        <div>
        <div className='hospital_info'>
          <p className='hospital_title'>연세대병원</p>
          <p className='margin'>주소 : (03722) 서울특별시 서대문구 연세로 50-1 (신촌동) 연세대학교병원 </p>
          <p className='margin'>대표번호 : 전화 02-2228-7170 팩스  02-6406-9965</p>
        </div>
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            
            initialCenter={
              {
                lat: 37.562167,
                lng: 126.941056
              }
            }
            onclick={this.onMapClicked}
          >
              <Marker
                name={'연세대병원'}
                position={{lat:37.562167, lng:126.941056}}
                onClick={this.onMarkerClick}
              />
                <InfoWindow
                  marker={this.state.activeMarker}
                  visible={this.state.showingInfoWindow}
                >
                  <div className= 'info_window'>
                    <p>{this.state.selectedPlace.name}</p>
                  </div>
                </InfoWindow>
          </Map> 
        </div>
      );
    }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCuFJYbSeuY7Twm8nSETrVPMTIr_80WjCc'
})(Hospital_three);
// AIzaSyCuFJYbSeuY7Twm8nSETrVPMTIr_80WjCc