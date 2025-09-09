"use client";
import { Editor } from "../../../registry/new-york/blocks/editor/index";

export function BasicEditorExample() {
  return <Editor placeholder="This is a basic editor." />;
}

export function EditorWithToolbarExample() {
  return <Editor showToolbar={true} placeholder="Editor with a toolbar." />;
}

const content =
  '{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"This is some read-only content.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}';

export function ReadOnlyEditorExample() {
  return <Editor initialValue={content} readOnly={true} showToolbar={false} />;
}
