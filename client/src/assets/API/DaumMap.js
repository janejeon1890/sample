import React, { Component } from 'react';
import propTypes from "prop-types";
import { withStyles } from '@material-ui/core';
// import {Helmet} from "react-helmet";
import postscribe from "postscribe"
// @scriptLoader(['//dapi.kakao.com/v2/maps/sdk.js?appkey=8c9d8a06c966491ae7033daabc986041'])

class DaumMap extends React.Component {

  componentDidMount() {
    // fetch('//dapi.kakao.com/v2/maps/sdk.js?appkey=8c9d8a06c966491ae7033daabc986041')
    // .then(response => {
    //   return response.json();
    // })
    // .then(json => console.log(json))

    // const url = `//dapi.kakao.com/v2/maps/sdk.js?appkey=8c9d8a06c966491ae7033daabc986041`
    // postscribe(window.document.head, `<script src="${url}"></script>`)
    
  //   let el = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
  //   let option = {
  //     center: new window.daum.maps.LatLng(33.450701, 126.570667),
  //     level: 3
  //   }
  //   let map = new window.daum.maps.Map(el)
  }
                                                  
  render() {
    return (
      <div>
        {/* <Helmet> */}
          <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8c9d8a06c966491ae7033daabc986041"></script>
          <script src="https://use.typekit.net/foobar.js"></script>
        {/* </Helmet> */}

        <div id="map"></div>
      </div>
    );
  }
}

export default DaumMap;





{/* <script>
  var container = document.getElementById('map');
  var options = {
    center: new daum.maps.LatLng(33.450701, 126.570667),
    level: 3
  };

  var map = new daum.maps.Map(container, options);
</script> */}


// curl -v -X GET "https://dapi.kakao.com/v2/local/search/address.json" \ 
// --data-urlencode "query=전북 삼성동 100" \
// -H "Authorization: KakaoAK 8c9d8a06c966491ae7033daabc986041"