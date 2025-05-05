import Headline from "../../../lib/components/atoms/Headline";

export default function Ferien() {
  const variant = "warning";

  return (
    <section>
      <Headline level={2} variant={variant}>
        Ferien
      </Headline>

      <p className="font-semibold">
        Dezember 2025 – Januar 2026 SCHLIEßUNGSZEITEN
      </p>

      <p>Die Tanzschule ist zu folgenden Zeiten geschlossen:</p>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Datum</th>
              <th>Erläuterung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mo, 23.12.24 – Mo, 06.01.25</td>
              <td>Weihnachtsferien</td>
            </tr>
            <tr>
              <td>Do, 27.02.25 – Di, 04.03.25</td>
              <td>Karneval</td>
            </tr>
            <tr>
              <td>Do, 20.03.25</td>
              <td></td>
            </tr>
            <tr>
              <td>So, 30.03.25</td>
              <td></td>
            </tr>
            <tr>
              <td>Mo, 07.04.25 – Mo, 21.04.25</td>
              <td></td>
            </tr>
            <tr>
              <td>Do, 01.05.25</td>
              <td>Maifeiertag</td>
            </tr>
            <tr>
              <td>Mi, 21.05.25</td>
              <td></td>
            </tr>
            <tr>
              <td>Do, 29.05.25 – So, 01.06.25</td>
              <td>Christi Himmelfahrt</td>
            </tr>
            <tr>
              <td>So, 08.06.25 & Mo, 09.06.25</td>
              <td>Pfingsten</td>
            </tr>
            <tr>
              <td>Do, 19.06.25</td>
              <td>Fronleichnam</td>
            </tr>
            <tr>
              <td>Mo, 30.06.25 – Fr, 18.07.25</td>
              <td></td>
            </tr>
            <tr>
              <td>Sa, 26.07.25 & So, 27.07.25</td>
              <td></td>
            </tr>
            <tr>
              <td>Mo, 08.09.25 – So, 21.09.25</td>
              <td>Sommerurlaub</td>
            </tr>
            <tr>
              <td>Fr, 03.10.25</td>
              <td>Tag der Deutschen Einheit</td>
            </tr>
            <tr>
              <td>Sa, 01.11.25</td>
              <td>Allerheiligen</td>
            </tr>
            <tr>
              <td>Mo, 03.11.25 – So, 16.11.25</td>
              <td></td>
            </tr>
            <tr>
              <td>Mo, 22.12.25 – Di, 06.01.26</td>
              <td>Weihnachtsferien</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="italic text-sm text-gray-600">
        In den Schließungszeiten und an den oben genannten Feiertagen findet
        kein Unterricht statt.
      </p>
    </section>
  );
}
