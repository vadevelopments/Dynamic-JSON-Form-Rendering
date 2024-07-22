'use client'

import React from 'react';
import { FormRenderer } from '@data-driven-forms/react-form-renderer';
import { componentMapper } from '@data-driven-forms/mui-component-mapper';
import schema from './schema.json';
import { Box } from '@mui/material'; 

export default function page() {

    const handleSubmit = () => {
        console.log("Form Submitted")
    }

    return (
        <Box>
            <FormRenderer
                schema={schema}
                componentMapper={componentMapper}
                onSubmit={handleSubmit}
            />
        </Box>
    )
}
