import React from "react";
import styled, { css, keyframes } from "styled-components";
import COLORS from "styles/COLORS";
import tw from "twin.macro";
import { BaseText } from "../BaseText";

const H1 = ({ ...props }) => <BaseText fontSize="4rem" fontWeight="bold" color={COLORS.text} {...props} />;
export default H1;
