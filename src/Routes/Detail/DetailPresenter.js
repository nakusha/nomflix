import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({loading, result, error}) => null

DetailPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    result: PropTypes.array,
    error: PropTypes.string
};

export default DetailPresenter;