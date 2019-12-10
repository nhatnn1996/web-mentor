import React from 'react';
import UploadIcon from '../../components/icon/upload';
import styled from 'styled-components';
import propTypes from 'prop-types';
import Loading from '../../assets/loading.gif';

const Label = styled.label`
  display: block;
  position: relative;
  overflow: hidden;
  max-height: 300px;
  padding-top: calc(100% * 1 / 2);
`;

const Wrap = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Upload(props) {
  const [state, setState] = React.useState({
    preview: '',
    loading: '',
  });
  const uploadImage = e => {
    const file = e.target.files[0];
    props.onChange(file);
    setState({ loading: Loading, preview: '' });
    setTimeout(
      () => {
        if(file) {
          setState({ loading: '', preview: URL.createObjectURL(file) });
        }else {
          setState({ loading: '', preview: '' });
        }
      },
      1000,
      file,
    );
  };
  const { preview, loading } = state;
  return (
    <div>
      <input
        type="file"
        onChange={uploadImage}
        className="d-none"
        id="image"
        accept="image/*"
      />
      <Label htmlFor="image" className="pointer rounded border">
        <Wrap>
          {preview === '' && loading === '' && (
            <span className="svg svg-sm svg-fill-main">
              <UploadIcon />
            </span>
          )}
          {preview !== '' && (
            <img className="w-100" src={preview} alt="Hình avatar" />
          )}
          {loading !== '' && (
            <img
              className="size-xl"
              src={loading}
              alt="Hình avatar"
            />
          )}
        </Wrap>
      </Label>
    </div>
  );
}

Upload.propTypes = {
  onChange: propTypes.func,
};

export default Upload;
