import React, { useEffect } from 'react';
import { store } from './app/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layout/Landing';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import Profiles from './components/profiles/profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import Applications from './components/applications/applications';
import Companies from './components/companies/companies';
import Contacts from './components/contacts/Contacts';
import Loads from './components/loads/Loads';
import Contact from './components/contact/Contact';
import Company from './components/company/Company';
import Application from './components/application/Application';
import Load from './components/load/Load';
import CreateApplication from './components/profile-application-form/CreateApplication';
import EditApplication from './components/profile-application-form/EditApplication';
import EditCompanyProfile from './components/company-profile-form/EditCompanyProfile';
import AddPreviousResidency from './components/profile-application-form/AddPreviousResidency';
import AddLicenseInformation from './components/profile-application-form/AddLicenseInformation';
import AddDrivingExperience from './components/profile-application-form/AddDrivingExperience';
import AddAccidentHistory from './components/profile-application-form/AddAccidentHistory';
import AddTrafficConvictions from './components/profile-application-form/AddTrafficConvictions';
import AddEmploymentHistory from './components/profile-application-form/AddEmploymentHistory';
import AddEducationHistory from './components/profile-application-form/AddEducationHistory';
import AddSignature from './components/profile-application-form/AddSignature';
import CreateProfile from './components/profile-form/CreateProfile';
import CreateLoad from './components/load-form/CreateLoad';
import CreateNewLoad from './components/load-form/CreateNewLoad';
import CreateCompanyProfile from './components/company-profile-form/CreateCompanyProfile';
import EditProfile from './components/profile-form/EditProfile';
import EditLoad from './components/load-form/EditLoad';
import EditContact from './components/profile-contact/EditContact';
import CreateContact from './components/profile-contact/CreateContact';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import AddAboutOurServices from './components/company-profile-form/AddAboutOurServices';
import AddAboutTheCompany from './components/company-profile-form/AddAboutTheCompany';
import ApplicationDashboard from './components/dashboard/ApplicationDashboard';
import CompanyDashboard from './components/dashboard/CompanyDashboard';
import LoadDashboard from './components/dashboard/LoadDashboard';
import ContactDashboard from './components/dashboard/ContactDashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profiles' element={<Profiles />} />
        {/*<Route path='/load' element={<LoadDashboard />} />*/}
        {/*<Route path='/contact' element={<ContactDashboard />} />*/}
        <Route path='/profile/user/:id' element={<Profile />} />
        {/*<Route path='/applications' element={<Applications />} />*/}

        <Route /////////////  Profile Routes  ////////////////
          path='/dashboard'
          element={<PrivateRoute component={Dashboard} />}
        />

        <Route
          path='/create-profile'
          element={<PrivateRoute component={CreateProfile} />}
        />

        <Route
          path='/edit-profile'
          element={<PrivateRoute component={EditProfile} />}
        />

        <Route /////////////  Application Routes  ////////////////
          path='/application'
          element={<PrivateRoute component={ApplicationDashboard} />}
        />

        <Route
          path='/application/user/:id'
          element={<PrivateRoute component={Application} />}
        />
        <Route
          path='/applications'
          element={<PrivateRoute component={Applications} />}
        />
        <Route
          path='/edit-application'
          element={<PrivateRoute component={EditApplication} />}
        />

        <Route
          path='/add-experience'
          element={<PrivateRoute component={AddExperience} />}
        />

        <Route
          path='/add-education'
          element={<PrivateRoute component={AddEducation} />}
        />

        <Route
          path='/create-application'
          element={<PrivateRoute component={CreateApplication} />}
        />

        <Route
          path='/previousResidency'
          element={<PrivateRoute component={AddPreviousResidency} />}
        />

        <Route
          path='/licenseInformation'
          element={<PrivateRoute component={AddLicenseInformation} />}
        />

        <Route
          path='/drivingExperience'
          element={<PrivateRoute component={AddDrivingExperience} />}
        />

        <Route
          path='/accidentHistory'
          element={<PrivateRoute component={AddAccidentHistory} />}
        />

        <Route
          path='/trafficConvictions'
          element={<PrivateRoute component={AddTrafficConvictions} />}
        />

        <Route
          path='/educationHistory'
          element={<PrivateRoute component={AddEducationHistory} />}
        />

        <Route
          path='/employmentHistory'
          element={<PrivateRoute component={AddEmploymentHistory} />}
        />

        <Route
          path='/signature'
          element={<PrivateRoute component={AddSignature} />}
        />

        <Route /////////////  Contact Routes  ////////////////
          path='/contact'
          element={<PrivateRoute component={ContactDashboard} />}
        />

        <Route
          path='/edit-contact'
          element={<PrivateRoute component={EditContact} />}
        />

        <Route
          path='/create-contact'
          element={<PrivateRoute component={CreateContact} />}
        />
        <Route
          path='/contacts'
          element={<PrivateRoute component={Contacts} />}
        />
        <Route
          path='/contact/user/:id'
          element={<PrivateRoute component={Contact} />}
        />

        <Route /////////////  Post Routes  ////////////////
          path='/posts'
          element={<PrivateRoute component={Posts} />}
        />

        <Route path='/post/:id' element={<PrivateRoute component={Post} />} />

        <Route /////////////  Company Routes  ////////////////
          path='/company'
          element={<PrivateRoute component={CompanyDashboard} />}
        />

        <Route
          path='/create-companyProfile'
          element={<PrivateRoute component={CreateCompanyProfile} />}
        />

        <Route
          path='/companies'
          element={<PrivateRoute component={Companies} />}
        />

        <Route
          path='/company/user/:id'
          element={<PrivateRoute component={Company} />}
        />

        <Route
          path='/edit-companyprofile'
          element={<PrivateRoute component={EditCompanyProfile} />}
        />
        <Route
          path='/add-aboutourservices'
          element={<PrivateRoute component={AddAboutOurServices} />}
        />
        <Route
          path='/add-aboutthecompany'
          element={<PrivateRoute component={AddAboutTheCompany} />}
        />

        <Route /////////////  LoadBoard Routes  ////////////////
          path='/load'
          element={<PrivateRoute component={LoadDashboard} />}
        />

        <Route
          path='/create-load'
          element={<PrivateRoute component={CreateLoad} />}
        />

        <Route
          path='/edit-load'
          element={<PrivateRoute component={EditLoad} />}
        />

        <Route
          path='/create-newload'
          element={<PrivateRoute component={CreateNewLoad} />}
        />

        <Route path='/loads' element={<PrivateRoute component={Loads} />} />

        <Route
          path='/loadboard/load/:id'
          element={<PrivateRoute component={Load} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
