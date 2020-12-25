import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


import './Hospital.css';

const mapStyles = {
  width: '800px',
  height: '400px',
  margin: '0 auto',
  top: '8%'
};

export class Hospital_one extends Component {
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
          <p className='hospital_title'>서울대병원</p>
          <p className='margin'>주소 : (03080) 서울특별시 종로구 대학로 101 (연건동) 서울대학교병원 </p>
          <p className='margin'>대표번호 : 전화 02-2072-2865 팩스 02-2072-3644</p>
        </div>
          <Map
            google={this.props.google}
            zoom={16}
            style={mapStyles}
            initialCenter={
              {
                lat: 37.579602,
                lng: 126.998998
              }
            }
            onclick={this.onMapClicked}
          >
              <Marker
                name={'서울대병원'}
                position={{lat:37.579602, lng:126.998998}}
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
})(Hospital_one);
// AIzaSyCuFJYbSeuY7Twm8nSETrVPMTIr_80WjCc