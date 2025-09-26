import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CarMemberService from '../services/CarMemberService';

function ListCarMemberComponents() {
    const [carmembers,setCarmembers] = useState([]);

    useEffect(()=>{
        getAllcarMember();
    },[]);

    const getAllcarMember=()=>{
        CarMemberService.getAllCarMembers().then((response)=>{
            setCarmembers(response.data)
            console.log(response)
        }).catch(error=>{
            console.log(error);
        })
    }

    const deleteCarMember=(carMemberId)=>{
        CarMemberService.deleteCarMember(carMemberId).then((respons)=>{
            console.log('삭제하기');
            getAllcarMember();
        }).catch(error=>{
            console.log(error);
        })
    }

  return (
    <div className='container'>
      <h2 className='text-center'>List CarMembers</h2>
        <Link to='/add-carmembers' className='btn btn-primary mb-2'>Add Carmember</Link>
       
      {/* <button onClick={saveMember}>insert</button> */}
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>CarMember Id</th>
            <th>CarMember FirstName</th>
            <th>CarMember LastName</th>
            <th>CarMember EmailName</th>
            <th>Mod/Del</th>
          </tr>
        </thead>

        <tbody>
            {
                carmembers.map(
                    carmember=>
                        <tr key={carmember.id}>
                            <td>{carmember.id}</td>
                            <td>{carmember.name}</td>
                            <td>{carmember.carMade}</td>
                            <td>{carmember.emailId}</td>
                            <td>
                            {/* edit-bikemembers를 호출하면 bikememer.id를 받아 */}
                            <Link to={`/edit-carmembers/${carmember.id}`} className='btn btn-light'>
                                Mod
                            </Link>
                            <button className='btn bg-secondary' onClick={()=>deleteCarMember(carmember.id)} 
                            >url</button>
                            </td>
                        </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListCarMemberComponents
