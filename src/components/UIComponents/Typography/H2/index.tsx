import React from "react";
import styled, { css } from "styled-components";
import COLORS from "@styles/COLORS";
import tw from "twin.macro";
import { BaseText } from "../BaseText";

const H2 = ({ ...props }) => <BaseText fontSize="3.25rem" fontWeight="bold" color={COLORS.text} {...props} />;

export default H2;
