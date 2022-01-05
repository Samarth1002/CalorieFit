import React, { useState, useEffect, useContext } from "react";

import { imageConfig } from "../utils/config";
import UPADTE_CONTACT from "../Components/Context/actions";

import firebase from "firebase/app";

import { readAndCompressImage } from "browser-image-resizer";

const AddContact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [star, setStar] = useState(false);
  const [downloadeUrl, setDownloadeUrl] = useState(null);
  const [isuploading, setIsuploading] = useState(false);

  useEffect(() => {
    if (updateContact) {
      setEmail(updateContact.email);
      setFname(updateContact.fname);
      setLname(updateContact.lname);
      setStar(updateContact.star);
      setAddress(updateContact.address);
      setDownloadeUrl(updateContact.downloadeUrl);
    }
  }, [updateContact]);

  const imagePicker = async (e) => {
    try {
      let resizedImage = await readAndCompressImage(file, imageConfig);

      const metadata = {
        contentType: file.type,
      };

      const storageRef = await firebase.storage().ref();

      var uploadTask = storageRef
        .child("images/" + file.name)
        .put(resizedImage, metadata);


        updateTask.on{
            firebase.storage.Taskevent.STATE_CHANGED,

            snapshot =>{
                setIsuploading(true)
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) *100
            
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED :
                        setIsuploading(false)
                        console.log("Uploading is paused");
                        break;

                        case firebase.storage.TaskState.RUNNING:
                            console.log("Uploading is in progress");
                
                    break;
                  
                }
                if (progress === 100) {
                    setIsuploading (false)
                }

                error =>{
                    console.log(error);
                }

                ()=>{
                    uploadTask.snapshot.ref.getDownloadURL()
                    .then(

                        downloadeUrl=>{
                            setDownloadeUrl(downloadeUrl)
                        }
                    )
                    .catch(

                        err=>{
                            console.log("error in download URL",err);
                        }
                    )
                }
            }
        }
    } catch (error) {
      console.error();
    }
  };

  return <div></div>;
};

export default AddContact;
