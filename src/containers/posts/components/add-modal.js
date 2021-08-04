import React, { useState } from 'react'
import {
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Slide,
  Typography,
  Box,
  Button,
  TextField,
  Collapse,
} from '@material-ui/core'
import { newItemId } from '../../../utils/modifier'

import { addPostStart } from '../../../redux/posts/posts.actions'
import { connect } from 'react-redux'
import AddIcon from '@material-ui/icons/Add'

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
    height: 50,
    margin: theme.spacing(2),
    marginBottom: theme.spacing(4),
    zIndex: 1000,
  },
  button: {
    margin: '0 auto',
    marginTop: theme.spacing(2),
    fontSize: '1.2em',
  },
}))

function AddItemModal({ addPostStart, posts }) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const handleTitle = (e) => setTitle(e.target.value)

  const handleBody = (e) => setBody(e.target.value)

  const handlePost = (event) => {
    event.preventDefault()
    const data = { id: newItemId(posts), userId: 1, title, body }
    addPostStart(data)
    handleClose()
    setBody('')
    setTitle('')
  }

  return (
    <>
      <Button onClick={handleOpen} variant="contained" className={classes.add}>
        Add <AddIcon color="primary" fontSize="small" />
      </Button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box component="div" className={classes.form}>
            <Typography variant="h4">New Post</Typography>
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
                Create
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}
const mapStateToProps = (state) => ({
  posts: state.posts.data,
})

export default connect(mapStateToProps, { addPostStart })(AddItemModal)
