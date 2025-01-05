import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';
import ForeignPlans from './components/ForeignPlans';
import Membership from './components/Membership';
import Mentors from './components/Mentors';
import Canada from './components/countries/Canada';
import Australia from './components/countries/Australia'
import Japan from './components/countries/Japan'
import Korea from './components/countries/Korea'
import NewZealand from './components/countries/NewZealand'
import Usa from './components/countries/Usa'
import PaymentMethod from './components/PaymentMethod';
import Test from './components/Test'
import PersonalityTest from './components/PersonalityTest'
import EducationPlans from './components/EducationPlans'

function App() {

  return (
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/paymentmethod" element={<PaymentMethod />} />
        <Route path="/test" element={<Test />} />
        <Route path='/personality_questions' element={<PersonalityTest/>}/>
        <Route path="/membership" element={<Membership />} />
        <Route path="/foreignPlans" element={<ForeignPlans />} />
        <Route path="/educationPlans" element={<EducationPlans />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/australia" element={<Australia />} />
        <Route path="/korea" element={<Korea />} />
        <Route path="/usa" element={<Usa />} />
        <Route path="/newzealand" element={<NewZealand />} />
        <Route path="/japan" element={<Japan />} />
      </Routes>

    </div>
  );
}

export default App;