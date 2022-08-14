import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import { PaletteTree } from './palette';
import { AddItem } from '../components/AddItem';

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree/>}>
      <ComponentPreview path="/AddItem">
        <AddItem/>
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
