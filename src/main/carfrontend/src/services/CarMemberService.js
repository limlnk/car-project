import axios from 'axios';
import React from 'react'



const BIKEMEMBER_BASE_REST_API_URL='http://localhost:8090/api/v1/carmembers';

class CarMemberService{
  getAllCarMembers(){
    return axios.get(BIKEMEMBER_BASE_REST_API_URL);
  }
  createCarMember(carmember){
    return axios.post(BIKEMEMBER_BASE_REST_API_URL,carmember);
  }
  getCarMemberById(carmemberId){
    return axios.get(BIKEMEMBER_BASE_REST_API_URL+'/'+carmemberId);
  }
  //파라미터대입순서는 앞에서부터
  updateCarMember(carmemberId,carmember){
    return axios.put(BIKEMEMBER_BASE_REST_API_URL+'/'+carmemberId,carmember);
  }
  deleteCarMember(carmemberId){
    return axios.delete(BIKEMEMBER_BASE_REST_API_URL+'/'+carmemberId);
  }
}

const carmemberService = new CarMemberService();
export default carmemberService;
  