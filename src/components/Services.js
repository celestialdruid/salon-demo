class Services extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <h1>Services</h1>

        <p>Prices depend on length, thickness, and severity of new growth.</p>

        <table>
          <tbody>
            <tr>
              <th colspan="3" class="services">Locs</th>
            </tr>
            <tr>
              <td>Loc Retwist</td>
              <td>$90+</td>
            </tr>
            <tr>
              <td>Traditional Starter Locs</td>
              <td>$145+</td>
            </tr>
            <tr>
              <td>Loc Retwist & Style</td>
              <td>$110+</td>
            </tr>

            <tr>
              <th colspan="3" class="services">Micro Locs</th>
            </tr>
            <tr>
              <td>Micro Loc Retwist</td>
              <td>$140+</td>
            </tr>
            <tr>
              <td>Micro Starter Locs</td>
              <td>$375+</td>
            </tr>
            <tr>
              <td>Micro Loc Retie (Interlocking)</td>
              <td>$220+</td>
            </tr>

            <tr>
              <th colspan="3" class="services">Color</th>
            </tr>
            <tr>
              <td>Highlights</td>
              <td>$50+</td>
            </tr>
            <tr>
              <td>Full Head Color</td>
              <td>$100+</td>
            </tr>
            <tr>
              <td>Gray Coverage Color</td>
              <td>$50</td>
            </tr>

            <tr>
              <th colspan="3" class="services">Extras</th>
            </tr>
            <tr>
              <td>Loc Detox</td>
              <td>$30+</td>
            </tr>
            <tr>
              <td>Loc Trim</td>
              <td>$20+</td>
            </tr>
            <tr>
              <td>Style Trim</td>
              <td>$30+</td>
            </tr>
          </tbody>
        </table>
    `;
  }
}

customElements.define("services-offered", Services);