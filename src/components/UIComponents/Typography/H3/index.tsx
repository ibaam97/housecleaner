import React from "react";
import styled, { css } from "styled-components";
import COLORS from "@styles/COLORS";
import tw from "twin.macro";
import { BaseText } from "../BaseText";

const H3 = ({ ...props }) => <BaseText fontSize="2.25rem" fontWeight="bold" color={COLORS.text} {...props} />;
export default H3;
