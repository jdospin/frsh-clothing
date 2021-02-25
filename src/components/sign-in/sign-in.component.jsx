import React, { useState }  from 'react';
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import './sign-in.styles.scss';

const SignIn = ({ emailSignInStartProp, googleSignInStartProp }) => {
  const [ userCredentials, setCredentials ] = useState({ email: '', password: ''});
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStartProp(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value });
  };
  
  return(
    <div className='sign-in'>
      <h2>I already have and account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={ handleSubmit }>
        <FormInput name='email' type='email' value={email} handleChange={handleChange} label='email' required />
        <FormInput name='password' type='password' value={password} handleChange={handleChange} label='password' required />
        
        <div className="buttons">
          <CustomButton type='submit' value='Submit Form'>Sign in</CustomButton>
          <CustomButton type='button' onClick={ googleSignInStartProp } isGoogleSignIn>Sign in with Google</CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  googleSignInStartProp: () => dispatch(googleSignInStart()),
  emailSignInStartProp: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
