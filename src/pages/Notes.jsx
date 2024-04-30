import { Box, Text, Button, Input, Flex, Tag, TagLabel, TagCloseButton, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const mockNotes = [
  { id: 1, content: "First note", tags: ["work"] },
  { id: 2, content: "Second note", tags: ["personal"] }
];

const Notes = () => {
  const [notes, setNotes] = useState(mockNotes);
  const [newNote, setNewNote] = useState("");
  const [newTag, setNewTag] = useState("");
  const [tags, setTags] = useState(["work", "personal"]);
  const [filter, setFilter] = useState("");

  const handleAddNote = () => {
    const newId = notes.length + 1;
    const noteToAdd = { id: newId, content: newNote, tags: [newTag] };
    setNotes([...notes, noteToAdd]);
    setNewNote("");
    setNewTag("");
  };

  const handleAddTag = () => {
    if (!tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter(tag => tag !== tagToDelete));
  };

  const filteredNotes = notes.filter(note => note.tags.includes(filter) || filter === "");

  return (
    <Box p={4}>
      <Flex direction="column" mb={4}>
        <Input placeholder="New note" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
        <Input placeholder="Tag for new note" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
        <Button onClick={handleAddNote}>Add Note</Button>
      </Flex>
      <Flex direction="column" mb={4}>
        <Input placeholder="New tag" value={newTag} onChange={(e) => setNewTag(e.target.value)} />
        <Button onClick={handleAddTag}>Add Tag</Button>
      </Flex>
      <Flex wrap="wrap" mb={4}>
        {tags.map(tag => (
          <Tag size="lg" key={tag} m={1}>
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => handleDeleteTag(tag)} />
          </Tag>
        ))}
      </Flex>
      <Flex direction="column">
        <Text mb={2}>Filter by tag:</Text>
        <Input placeholder="Filter tag" value={filter} onChange={(e) => setFilter(e.target.value)} />
      </Flex>
      <Flex direction="column" mt={4}>
        {filteredNotes.map(note => (
          <Box key={note.id} p={3} shadow="md" borderWidth="1px">
            <Text>{note.content}</Text>
            <Flex>
              {note.tags.map(tag => (
                <Tag size="sm" key={tag} m={1}>{tag}</Tag>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Notes;