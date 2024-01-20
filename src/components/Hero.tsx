import React from 'react';
import {Box, Chip, Input} from "@mui/joy";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import {ArrowForward} from "@mui/icons-material";

const Hero = () => {
    return (
        <div className={"two-col"}>
            <Box>
                <Chip size="lg" variant="outlined" color="neutral">
                    MVHacks 7.0
                </Chip>
                <Typography
                    level="h1"
                    fontWeight="xl"
                    fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
                >
                    The Hackathon for everyone
                </Typography>
                <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
                    MVHacks in a hackathon designed to improve your tech skills in a collaborative environment
                </Typography>
                <Box
                    component="form"
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    sx={{
                        display: 'flex',
                        gap: 1,
                        my: 2,
                        alignSelf: 'stretch',
                        flexBasis: '80%',
                    }}
                >
                    <input type="hidden" name="access_key" value="50e99b85-f308-4801-9635-b6e5c1459742" />
                    {/*Access key is public anyway*/}
                    <input type="hidden" name="subject" value="New sign-up" />
                    <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                    <input type="checkbox" name="botcheck" id="" style={{"display": "none"}} />

                    <Input
                        required
                        autoFocus={true}
                        id="email"
                        name="email"
                        type="email"
                        size="lg"
                        placeholder="Get notified"
                        sx={{flex: 'auto'}}
                    />
                    <IconButton type="submit" size="lg" variant="solid" color="primary">
                        <ArrowForward/>
                    </IconButton>
                </Box>
            </Box>

        </div>
    );
}

export default Hero