import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'select2/dist/css/select2.min.css';
import 'select2';
import $ from 'jquery';

const Multiselect = () => {
  useEffect(() => {
    // Initialize Select2 for the first dropdown
    $(".js-select2").select2({
      closeOnSelect: false,
      placeholder: "Click to select an option",
      allowHtml: true,
      allowClear: true,
      tags: true,
      width: "100%",
    });

    // Initialize Select2 for the second dropdown
    $('.icons_select2').select2({
      width: "100%",
      templateSelection: formatSelection,
      templateResult: formatResult,
      allowHtml: true,
      placeholder: "Click to select an option",
      dropdownParent: $('.select-icon'),
      allowClear: true,
      multiple: false,
    });

    function formatSelection(icon, badge) {
      if (!icon.id) {
        return icon.text;
      }
      return $('<span><i class="fa ' + $(icon.element).data('icon') + '"></i> ' + icon.text + '</span>');
    }

    function formatResult(icon, badge) {
      if (!icon.id) {
        return icon.text;
      }
      return $('<span><i class="fa ' + $(icon.element).data('icon') + '"></i> ' + icon.text + '</span>');
    }
  }, []); // Empty dependency array ensures that this runs only once after initial render

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center mb-5">
            <h2 className="heading-section">Multiselect #05</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <select className="js-select2" multiple="multiple">
              <option value="O1" data-icon="fa-icon1" data-badge="">Option1</option>
              <option value="O2" data-icon="fa-icon2" data-badge="">Option2</option>
              <option value="O3" data-icon="fa-icon3" data-badge="">Option3</option>
              <option value="O4" data-icon="fa-icon2" data-badge="">Option4</option>
              <option value="O5" data-icon="fa-icon3" data-badge="">Option5</option>
              <option value="O6" data-icon="fa-icon2" data-badge="">Option6</option>
              <option value="O7" data-icon="fa-icon3" data-badge="">Option7</option>
              {/* ... Other options ... */}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multiselect;
