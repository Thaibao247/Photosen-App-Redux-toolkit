import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./styles.scss";
import { useSelector } from "react-redux";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from "../../photoSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function MainPage(props) {
  const photos = useSelector((state) => state.photos);
  const history = useHistory();
  const dispatch = useDispatch();

  const handlePhotoEditClick = (photo) => {
    const editPageUrl = `/photos/${photo.id}`;
    history.push(editPageUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      {/* <Banner title="You are beautiful" /> */}
      <Container fluid>
        <div className="photo-main__link">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList
          photos={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
