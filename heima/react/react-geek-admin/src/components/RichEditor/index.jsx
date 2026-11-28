import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Button, Tooltip, Divider } from 'antd';
import {
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  UndoOutlined,
  RedoOutlined,
} from '@ant-design/icons';
import './index.scss';

const RichEditor = ({ value = '', onChange }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
  });

  // ⚠️ 这行必须在所有 hook 之后。以后要加 useEffect，写在它上面。
  if (!editor) return <div className="rich-editor rich-editor--loading" />;

  const tools = [
    {
      icon: <BoldOutlined />,
      title: '加粗',
      active: 'bold',
      run: () => editor.chain().focus().toggleBold().run(),
    },
    {
      icon: <ItalicOutlined />,
      title: '斜体',
      active: 'italic',
      run: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      icon: <StrikethroughOutlined />,
      title: '删除线',
      active: 'strike',
      run: () => editor.chain().focus().toggleStrike().run(),
    },
    { divider: true },
    {
      text: 'H2',
      title: '大标题',
      active: { level: 2 },
      run: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      text: 'H3',
      title: '小标题',
      active: { level: 3 },
      run: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    { divider: true },
    {
      icon: <UnorderedListOutlined />,
      title: '无序列表',
      active: 'bulletList',
      run: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      icon: <OrderedListOutlined />,
      title: '有序列表',
      active: 'orderedList',
      run: () => editor.chain().focus().toggleOrderedList().run(),
    },
    { divider: true },
    {
      icon: <UndoOutlined />,
      title: '撤销',
      run: () => editor.chain().focus().undo().run(),
      disabled: !editor.can().undo(),
    },
    {
      icon: <RedoOutlined />,
      title: '重做',
      run: () => editor.chain().focus().redo().run(),
      disabled: !editor.can().redo(),
    },
  ];

  return (
    <div className="rich-editor">
      <div className="rich-editor__toolbar">
        {tools.map((t, i) =>
          t.divider ? (
            <Divider key={`d${i}`} type="vertical" />
          ) : (
            <Tooltip key={t.title} title={t.title}>
              <Button
                size="small"
                type={t.active && editor.isActive(t.active) ? 'primary' : 'text'}
                disabled={t.disabled}
                onClick={t.run}
              >
                {t.icon ?? t.text}
              </Button>
            </Tooltip>
          ),
        )}
      </div>
      <EditorContent editor={editor} className="rich-editor__content" />
    </div>
  );
};

export default RichEditor;
