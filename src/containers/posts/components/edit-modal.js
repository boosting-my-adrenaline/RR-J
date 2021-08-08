import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  Button,
  TextField,
  Box,
  Slide,
} from '@material-ui/core'

import { editPostStart } from '../../../redux/posts/posts.actions'
import { connect } from 'react-redux'
import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    backgroundColor: 'whitesmoke',
    padding: '100px 20px',
    borderRadius: 5,
  },
  paper: {
    backgroundColor: 'black',
    borderRadius: 20,
    boxShadow: '5px 5px 10px rgba(0, 0, 0, .4)',
    padding: theme.spacing(2, 4, 3),
    height: 250,
  },
  textarea: {
    margin: ' 10px 0',
  },
  add: {
    height: 30,
    margin: theme.spacing(2),
    marginBottom: theme.spacing(1),
    zIndex: 1000,
  },
  button: {
    margin: '0 auto',
    marginTop: theme.spacing(2),
    fontSize: '1.2em',
  },
  editIcon: {
    marginLeft: 5,
  },
}))

function EditItemModal({ post, editPostStart }) {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState(post.title)
  const [body, setBody] = useState(post.body)

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleTitle = (e) => setTitle(e.target.value)

  const handleBody = (e) => setBody(e.target.value)

  const handlePost = (event) => {
    event.preventDefault()
    const data = { ...post, title, body }
    editPostStart(data)
    handleClose()
  }

  return (
    <>
      <Button onClick={handleOpen} variant="contained" className={classes.add}>
        Edit{' '}
        <EditIcon
          color="primary"
          fontSize="small"
          className={classes.editIcon}
        />
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Slide in={open}>
          <Box component="div" className={classes.form}>
            <Typography variant="h4">Edit</Typography>
            <form onSubmit={handlePost}>
              <TextField
                label="Title"
                name="Title"
                value={title}
                onChange={handleTitle}
                fullWidth
                as="textarea"
                className={classes.textarea}
              />
              <TextField
                label="Body"
                name="Body"
                value={body}
                fullWidth
                onChange={handleBody}
                className={classes.textarea}
              />
              <Button
                onClick={handlePost}
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                Submit
              </Button>
            </form>
          </Box>
        </Slide>
      </Modal>
    </>
  )
}

export default connect(null, { editPostStart })(EditItemModal)
