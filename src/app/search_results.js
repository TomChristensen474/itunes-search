import React, { useState } from "react";
import styles from "./page.module.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function SearchResults() {
    return (
        <div >
            <main className={styles.main}>
                <h3>Results</h3>
                <Card>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.primary', fontSize: 24 }}>trackName</Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 16 }}>artistName</Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5, fontSize: 14  }}>albumName</Typography>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}