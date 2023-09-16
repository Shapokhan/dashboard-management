import React from 'react';
import New from './New';
import { userInputs } from '@/formSource';

const NewPage = () => {
    return <New inputs={userInputs} title="Add New User" />
}

export default NewPage