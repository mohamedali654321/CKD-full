import React from 'react';
import PropTypes from 'prop-types';
import { CKEditor } from '@ckeditor/ckeditor5-react';
//import  CKEditor from '@ckeditor/ckeditor5-react'
//import ClassicEditor from 'ckeditor5-build-strapi-wysiwyg';
import ClassicEditor from '@mrabdrhm/ckeditor5-build-classic-arabic'

import styled from 'styled-components';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;


// FullEditor
//     .create( document.querySelector( '#editor' ), {
//         language: {
//             // The UI will be English.
//             ui: 'ar',

//             // But the content will be edited in Arabic.
//             content: 'ar'
//         }
//     } )
//     .then( editor => {
//         window.editor = editor;
//     } )
//     .catch( err => {
//         console.error( err.stack );
//     } );



const Editor = ({ onChange, name, value }) => {

  





  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        // config={configuration}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;