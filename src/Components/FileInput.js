import React from "react";
import {Controller} from "react-hook-form";
import Dropzone from "react-dropzone";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import CloudUpload from "@material-ui/icons/CloudUpload";
import ListItem from "@material-ui/core/ListItem";
import InsertDriveFile from "@material-ui/icons/InsertDriveFile";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
   root: {
      backgroundColor: "#eee",
      textAlign: "center",
      cursor: "pointer",
      color: "#333",
      padding: "10px",
      marginTop: "20px",
   },
   icon: {
      marginTop: "16px",
      color: "#888888",
      fontSize: "42px",
   },
}));

export const FileInput = ({control, name}) => {
   const styles = useStyles();

   return (
      <Controller control={control}
                  name={name}
                  defaultValue={[]}
                  render={({field: {onChange, onBlur, value}}) => <>
                     <Dropzone onDrop={onChange}>
                        {
                           ({getRootProps, getInputProps}) =>
                              (<Paper className={styles.root} variant="outlined" {...getRootProps()}>
                                 <CloudUpload className={styles.icon}/>
                                 <input {...getInputProps()} name={name} onBlur={onBlur}/>
                                 <p>Drag 'n' drop files here, or click to select files</p>
                              </Paper>)
                        }
                     </Dropzone>
                     <List>
                        {
                           value.map((f, index) => (
                              <ListItem key={index}>
                                 <ListItemIcon>
                                    <InsertDriveFile/>
                                 </ListItemIcon>
                                 <ListItemText primary={f.name}
                                               secondary={f.size}/>
                              </ListItem>
                           ))
                        }

                     </List>
                  </>}/>
   )
};
