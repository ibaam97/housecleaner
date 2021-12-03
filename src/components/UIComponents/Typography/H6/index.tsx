import React from "react";
import styled from "styled-components";
import COLORS from "@styles/COLORS";
import tw from "twin.macro";
import { BaseText } from "../BaseText";

const H6 = ({ ...props }) => <BaseText fontSize="1rem" fontWeight="bold" color={COLORS.text} {...props} />;
export default H6;
