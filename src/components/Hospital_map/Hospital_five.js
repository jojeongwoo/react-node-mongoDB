import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


import './Hospital.css';

const mapStyles = {
  width: '800px',
  height: '400px',
  margin: '0 auto',
  top: '8%'
};

export class Hospital_five extends Component {
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
            <p className='hospital_title'>경희대병원</p>
            <p className='margin'>주소 : (02454) 서울특별시 동대문구 경희대로1나길 56-3 (회기동) 경희대학교병원 </p>
            <p className='margin'>대표번호 : 전화 02-958-8114 팩스 02-958-8113</p>
          </div>

          <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={
              {
                lat: 37.593934829196904,
                lng: 127.05131418665131
              }
            }
            onclick={this.onMapClicked}
            >

              <Marker
                name={'경희대병원'}
                position={{lat:37.593934829196904, lng:127.05131418665131}}
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
  apiKey: 'AIzaSyCuFJYbSeuY7Twm8nSETrVPMTIr_80WjCc',
  language: 'Loading'
})(Hospital_five);
// AIzaSyCuFJYbSeuY7Twm8nSETrVPMTIr_80WjCc