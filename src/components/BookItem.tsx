interface BookItemProps {
  id: number;
  isbn: string;
  author: string;
  title: string;
  handleDeleteBook: () => void;
}

export default function BookItem(props: BookItemProps) {

  return (
    <tr key={props.id}>
      <td>{props.isbn}</td>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>
        <button type="button" onClick={props.handleDeleteBook}>
          Remover
        </button>
      </td>
    </tr>
  );
}