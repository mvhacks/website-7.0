import * as React from "react";
import Box from "@mui/system/Box";
import Link from "@mui/joy/Link";
import Button from "@mui/joy/Button";

export default function Footer() {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            component="nav"
            position="static"
            flexDirection="column"
            style={{ background: "transparent", boxShadow: "none", paddingBottom: "30px"}}
        >
            <Link href="https://www.instagram.com/mvhacks/" target="_blank" sx={{marginBottom: "5px"}}>
                <Box
                    component="img"
                    sx={{ height: 32, maxWidth: 160, borderRadius: "25%" }}
                    alt="Logo"
                    src={"https://github.com/mvhacks/website-6.0/blob/81511890066365f6b19ab99f5281ac2a7704db51/src/images/insta_logo.png?raw=true"}
                    style={{ transform: "scale(1.5)", margin: "15px" }}
                />
            </Link>

            <Link href="https://mvhacks-6-0.devpost.com/project-gallery" target="_blank" sx={{marginBottom: "10px"}}>
                <Button
                    size="sm"
                    sx={{
                        ml: 1,
                        width: "250px",
                        textTransform: "none",
                        borderRadius: "11px",
                    }}
                    variant="solid"
                    color="success"
                    style={{ border: "none", fontSize: "90%" }}
                >
                    Check out previous projects!
                </Button>
            </Link>
            <Link href="mailto:alexm@mvhacks.io" sx={{marginBottom: "5px"}}>
                <Button
                    size="sm"
                    sx={{
                        ml: 1,
                        width: "250px",
                        textTransform: "none",
                        borderRadius: "11px",
                    }}
                    variant="solid"
                    color="success"
                    style={{ border: "none", fontSize: "90%" }}
                >
                    Contact Us!
                </Button>
            </Link>
        </Box>


    );
}