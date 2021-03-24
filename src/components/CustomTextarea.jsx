import React, { useState, useEffect } from 'react';
import '../App.css';
import { Editor } from '@tinymce/tinymce-react';

const CustomTextarea = ({
  addContact,
  changeTimestamp,
  timeStamp,
  keyCallback,
  contact,
}) => {
  let editorRef;

  useEffect(() => {
    if (changeTimestamp > 0) {
      const hours = (Math.floor(timeStamp.new / 3600) % 60)
        .toString()
        .padStart(2, 0);
      const minutes = (Math.floor(timeStamp.new / 60) % 60)
        .toString()
        .padStart(2, 0);
      const seconds = Math.floor(timeStamp.new % 60)
        .toString()
        .padStart(2, 0);
      const text =
        hours > 0
          ? `[${hours}:${minutes}:${seconds}]`
          : `[${minutes}:${seconds}]`;
      appendTextToEditor(`${text} `);
    }
  }, [timeStamp]);

  useEffect(() => {
    if (addContact > 0) {
      const text = `${contact} `;
      appendTextToEditor(text);
    }
  }, [contact, addContact]);

  const appendTextToEditor = (value) => {
    editorRef.editor.execCommand('mceInsertContent', false, value);
  };

  return (
    <Editor
      id="editor"
      apiKey="9wnewx9v94f2f7urdph47eiha8efw7pl7y1ey7a7kporeipx"
      init={{
        height: 560,
        menubar: true,
        menu: {
          file: {
            title: 'File',
            items: 'newdocument restoredraft | preview | print',
          },
          edit: {
            title: 'Edit',
            items: 'cut copy paste | selectall | searchreplace',
          },
          view: {
            title: 'View',
            items:
              'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen',
          },
          insert: {
            title: 'Insert',
            items:
              'image link media inserttable | blockquote pagebreak | insertdatetime',
          },
          format: {
            title: 'Format',
            items:
              'strikethrough superscript subscript codeformat | formats blockformats lineheight ',
          },
          tools: {
            title: 'Tools',
            items: 'spellchecker spellcheckerlanguage | code wordcount',
          },
          table: {
            title: 'Table',
            items: 'inserttable | cell row column | tableprops deletetable',
          },
          help: { title: 'Help', items: 'help' },
        },
        toolbar_mode: 'sliding',
        plugins: [
          'advlist autolink lists link image table charmap print preview anchor export pagebreak',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
          'quickbars',
        ],
        contextmenu: 'link image table',
        toolbar:
          'fontselect | bold italic underline | forecolor backcolor fontsizeselect | \
          align bullist numlist outdent indent | removeformat | undo redo | exportmenu',
        fontsize_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
        font_formats:
          'Arial=arial,helvetica,sans-serif; Courier New=courier new,courier,monospace; AkrutiKndPadmini=Akpdmi-n',
        export_cors_hosts: ['https://oyamli.azurewebsites.net/'],
        export_ignore_elements: ['iframe', 'video', 'audio'],
        quickbars_insert_toolbar: '',
        setup: function (editor) {
          var items = [
            {
              type: 'menuitem',
              text: '.doc',
              icon: 'export',
              onAction: function (_) {
                var preHtml =
                  "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
                var postHtml = '</body></html>';
                var html = preHtml + editor.getContent() + postHtml;
                var blob = new Blob(['\ufeff', html], {
                  type: 'application/msword',
                });
                var url =
                  'data:application/msword;charset=utf-8,' +
                  encodeURIComponent(html);
                var filename = 'export.doc';
                // window.open(url);
                var downloadLink = document.createElement('a');

                document.body.appendChild(downloadLink);
                if (navigator.msSaveOrOpenBlob) {
                  navigator.msSaveOrOpenBlob(blob, filename);
                } else {
                  // Create a link to the file
                  downloadLink.href = url;

                  // Setting the file name
                  downloadLink.download = filename;

                  //triggering the function
                  downloadLink.click();
                }

                document.body.removeChild(downloadLink);
              },
            },
          ];

          editor.ui.registry.addMenuButton('exportmenu', {
            text: 'Export',
            fetch: function (callback) {
              callback(items);
            },
          });
        },
        // skin: 'oxide-dark',
        // content_css: 'dark',
      }}
      ref={(el) => {
        editorRef = el;
      }}
      onKeyDown={(event) => {
        keyCallback(event);
      }}
    />
  );
};

export default CustomTextarea;
