import React, { useState,useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import CarMemberService from '../services/CarMemberService';

function AddCarMemberComponents() {
  
    const [name,setName] =useState('');
    const [carMade,setCarMade] = useState('');
    const [emailId,setEmailId] = useState(''); 
    
    const navigate =useNavigate();
    const {id}=useParams();

    useEffect(()=>{
        CarMemberService.getCarMemberById(id).then((response)=>{
            setName(response.data.name);
            setCarMade(response.data.carMade)
            setEmailId(response.data.emailId)
        }).catch(error=>{
            console.log(error);
        })
    },[id])

    const title=()=>{
        if(id){
            return 'Update CarMember';
        }else {
            return 'Add CarMember';
        }
    }

    const saveOrUpdateCarMember=(e)=>{
        e.preventDefault();
        const carmember={name,carMade,emailId};

        if(id){
            CarMemberService.updateCarMember(id,carmember).then((response)=>{
                console.log(response.data)
                navigate('/carmembers');
            }).catch(error=>{
                console.log(error);
            })
        }else{
            CarMemberService.createCarMember(carmember).then((response)=>{
                console.log(response.data)
                navigate('/carmembers');
            }).catch(error=>{
                console.log(error);
            })
        }
    }

    return (
        <div>
        <br /><br />
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>{title()}</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>name</label>
                                <input
                                    type='text'
                                    placeholder='Enter name'
                                    name='firstName'
                                    className='form-control'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>car made</label>
                                <input
                                    type='text'
                                    placeholder='Enter car made name'
                                    name='lastName'
                                    className='form-control'
                                    value={carMade}
                                    onChange={(e) => setCarMade(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email Id</label>
                                <input
                                    type='text'
                                    placeholder='Enter email id'
                                    name='emailId'
                                    className='form-control'
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                />
                            </div>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateCarMember(e)}>Submit</button>
                            <Link
to='/carmembers'
className='btn btn-secondary'
style={{ marginLeft: '5px' }}
>
Cancel
</Link>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCarMemberComponents
