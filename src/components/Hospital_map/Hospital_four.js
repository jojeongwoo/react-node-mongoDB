import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';


import './Hospital.css';

const mapStyles = {
  width: '800px',
  height: '400px',
  margin: '0 auto',
  top: '8%'
};

export class Hospital_four extends Component {
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
          <p className='hospital_title'>동의대병원</p>
          <p className='margin'>주소 : (47227) 부산광역시 부산진구 양정로 62 (양정동) 동의대학교 한방병원 </p>
          <p className='margin'>대표번호 : 전화 051-867-5101 팩스 051-890-1234</p>
        </div>
          <Map
            google={this.props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={
              {
                lat: 35.169971135577086,
                lng: 129.0767903439151
              }
            }
            onclick={this.onMapClicked}
          >
              <Marker
                name={'동의대병원'}
                position={{lat:35.169971135577086, lng:129.0767903439151}}
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
})(Hospital_four);
// AIzaSyCuFJYbSeuY7Twm8nSETrVPMTIr_80WjCc