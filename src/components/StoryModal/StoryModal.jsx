import { useState } from "react";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Modal from "@mui/material/Modal";
import "./StoryModal.css";
import { StoryConsumer } from "../../context";
import { actionTypes } from "../../context/reducer";

function StoryModal({ open, handleClose }) {
  const [story, dispatch] = StoryConsumer();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    interact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      data: user,
    });
    console.log(story);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <div className='modal__container'>
        <h1>Share Your Amazing Story!</h1>

        <form action=''>
          <div className='form__group'>
            <label htmlFor='' className='image-label'>
              Upload Your Picture
            </label>
            <div className='image__container'>
              <div className=''>
                <input type='file' id='userimage' />
              </div>
              <label htmlFor='userimage' className='imageicon'>
                {" "}
                <AttachFileIcon />{" "}
              </label>
            </div>
          </div>
          <div className='row'>
            <div className='formGroup'>
              <label htmlFor=''>Firstname</label>
              <input
                type='text'
                name='firstname'
                value={user.firstname}
                onChange={handleChange}
              />
            </div>
            <div className='formGroup'>
              <label htmlFor=''>Lastname</label>
              <input
                type='text'
                name='lastname'
                value={user.lastname}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='text__container'>
            <label htmlFor=''>Share your story</label>
            <textarea
              name='message'
              id=''
              cols='30'
              rows='5'
              defaultValue={user.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='check__container'>
            <p>What did you interact with Vasiti as?</p>
            <div className='radio__con'>
              <input
                type='radio'
                name='interact'
                id='customer'
                value='customer'
                onChange={handleChange}
              />
              <label htmlFor='customer'>Customer</label>
              <input
                type='radio'
                name='interact'
                id='vendor'
                value='vendor'
                onChange={handleChange}
              />
              <label htmlFor='vendor'>Vendor</label>
            </div>
          </div>
          <div className='student__container'>
            <label htmlFor=''>City or Higher Institution (for Students)</label>
            <input type='text' className='studentinput' />
          </div>
          <div className='sharebtn__container'>
            <Button type='submit' className='sharebtn' onClick={handleSubmit}>
              Share your story!
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default StoryModal;
