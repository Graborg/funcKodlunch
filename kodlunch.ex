defmodule K do
  def mailPreferencesFunc(arr) do
    arr
    |> Enum.filter(fn %{age: age} -> age > 18 end)
    |> Enum.map(fn e ->
      Map.put(e, :drink, 'beer')
    end)
    |> mail()
  end

  def run() do
    persons = [
      %{
        name: 'Mikael',
        age: 15,
        meta: {
          # lots of other info
        }
      },
      %{
        name: 'Alexander',
        age: 19,
        meta: {
          # lots of other info
        }
      }
    ]

    mailPreferencesFunc(persons)
  end

  def mail([]), do: IO.puts("nothing to send")

  def mail(arg) do
    IO.puts("sending mail")
    IO.inspect(arg)
  end
end
