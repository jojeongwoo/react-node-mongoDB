import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


import './Hospital.css';

const mapStyles = {
  width: '800px',
  height: '400px',
  margin: '0 auto',
  top: '8%'
};

export class Hospital_two extends Component {
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
          <p className='hospital_title'>나사렛병원</p>
          <p className='margin'>주소 : (21972) 	인천광역시 연수구 먼우금로 98 (동춘동) 나사렛병원 </p>
          <p className='margin'>대표번호 : 전화 032-899-9999 팩스 032-899-9998</p>
        </div>
          <Map
            google={this.props.google}
            zoom={17}
            style={mapStyles}
            initialCenter={
              {
                lat: 37.4082030464729,
                lng: 126.67053385535579
              }
            }
            onclick={this.onMapClicked}
          >
              <Marker
                name={'나사렛병원'}
                position={{lat:37.4082030464729, lng:126.67053385535579}}
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
})(Hospital_two);
// AIzaSyCuFJYbSeuY7Twm8nSETrVPMTIr_80WjCc