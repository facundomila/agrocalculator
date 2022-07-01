<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Muestras</title>
    <meta name="description" content="soil samples details">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">
  </head>
  
  <body>    
    <div class="host-wrapper">
      <div class="samples-table">
        <span>Clientes</span>
        <select class="samples" id="clientslist" name="clientslist">
        </select>
        <table class="table">
          <thead>
            <tr>
              <th>Muestra</th>
              <th>Fecha</th>
              <th>Cliente</th>
              <th>Campo</th>
              <th>Identificacion</th>
              <th>Profundidad</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody id="datalist">
          </tbody>
        </table>
      </div>
      <div class="calc-panel">
        <h4>ANALISIS DE SUELO</h4>
        <hr/>
        <div class="header-table">
          <div class="inputs">
            <div class="input-row">
              <span>Muestras</span><span class="screen" id="calcscreen"></span>
              <span>Profundidad [cm]</span><span class="screen" id="depth">30</span>
            </div>
            <div class="input-row">
              <span>Cultivo</span>
              <select class="screen" id="cultivo" name="cultivo">
                <option value="alfalfa">Alfalfa</option>
                <option value="algodon">Algodon</option>
                <option value="arroz">Arroz</option>
                <option value="arveja">Arveja</option>
                <option value="azucar">Caña de azucar</option>
                <option value="garvanzo">Garbanzo</option>
                <option value="girasol">Girasol</option>
                <option value="lenteja">Lenteja</option>
                <option value="maiz">Maiz</option>
                <option value="mani">Mani</option>
                <option value="papa">Papa</option>
                <option value="poroto">Poroto</option>
                <option value="soja">Soja</option>
                <option value="sorgo">Sorgo</option>
                <option value="tabaco">Tabaco</option>
                <option value="trigo">Trigo</option>
              </select>
            </div>
            <div class="input-row">
              <span>Rinde objetivo [kg]</span><input class="screen" type="text" id="rendimiento" name="rendimiento">
            </div>
            <div class="input-row">
              <span>Precio cultivo x Tn [USD]</span><input class="screen" type="text" id="precio" name="precio">
            </div>
          </div>
          <div class="buttons">
            <button class="pill-yellow" onclick="clearInputData()"><i class="fa fa-refresh"> </i> &nbsp refrescar</button>
            <!-- <button class="pill-transparent" onclick="getAmountResults()">Calc</button>
            <button class="pill-yellow" onclick="cleanAmountResults()"><i class="fa fa-refresh"></i></button> -->
          </div>
        </div>
        <div class="input-row">
          <h4>REQ. DE NUTRIENTES</h4>
          <button class="pill-transparent" onclick="getNutrientsRequirement()">Calc</button>
        </div>  
        <hr/>
        <!-- <div class="header-table">
          <div class="inputs">
            <span>Cultivo</span>
            <select class="screen" id="cultivo" name="cultivo">
              <option value="alfalfa">Alfalfa</option>
              <option value="algodon">Algodon</option>
              <option value="arroz">Arroz</option>
              <option value="arveja">Arveja</option>
              <option value="azucar">Caña de azucar</option>
              <option value="garvanzo">Garbanzo</option>
              <option value="girasol">Girasol</option>
              <option value="lenteja">Lenteja</option>
              <option value="maiz">Maiz</option>
              <option value="mani">Mani</option>
              <option value="papa">Papa</option>
              <option value="poroto">Poroto</option>
              <option value="soja">Soja</option>
              <option value="sorgo">Sorgo</option>
              <option value="tabaco">Tabaco</option>
              <option value="trigo">Trigo</option>
            </select>
            <span>Rinde objetivo [kg]</span><input class="screen" type="text" id="rendimiento" name="rendimiento">
            <span>Precio cultivo x Tn [USD]</span><input class="screen" type="text" id="precio" name="precio">
          </div>
          <div class="buttons">
            <button class="pill-transparent" onclick="getNutrientsRequirement()">Calc</button>
            <button class="pill-yellow" onclick="cleanNutrientsRequirement()"><i class="fa fa-refresh"></i></button>
          </div>
        </div> -->
        <div class="table-calc" id="nutrientsReqResultPanel" hidden>
          <div class="left-side">
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Nitrogeno</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Fosforo</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Potasio</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Azufre</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Zinc</span>
          </div>
          <div class="right-side">
            <div><span class="value" id="nNutrientsReqResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="pNutrientsReqResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="kNutrientsReqResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="sNutrientsReqResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="znNutrientsReqResult"></span><span class="unit">kg/ha</span></div>
          </div>
        </div>
        <div class="input-row">
          <h4>REQ. DE FERTILIZACION</h4>
          <button class="pill-transparent" onclick="getAmountResults()">Calc</button>
        </div>
        <hr/>
        <div class="table-calc" id="amountResultPanel" hidden>
          <div class="left-side">
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Nitrogeno</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Fosforo</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Potasio</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Azufre</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Zinc</span>
          </div>
          <div class="right-side">
            <div><span class="value" id="nAmountResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="pAmountResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="kAmountResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="sAmountResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="znAmountResult"></span><span class="unit">kg/ha</span></div>
          </div>
        </div>
        <!-- <div class="header-table">
          <div class="inputs">
            <span>Cultivo seleccionado en "rinde obj" ej arroz</span>
            <span>Cantidad de nustrientes disponible (analisis de suelo)</span>
            <span>FERTILIZACION = Requerimientos de cultivo - Cantidad de nustrientes disponible [kg/ha]</span>
          </div>
          <div class="buttons">
            <button class="pill-transparent" onclick="getAmountResults()">Calc</button>
            <button class="pill-yellow" onclick="cleanAmountResults()"><i class="fa fa-refresh"></i></button>
          </div>
        </div> -->
        
        <div class="input-row">
          <!-- FUENTES DE FERTILIZACION [lt/ha] -->
          <h4>FUENTES DE FERTILIZACION</h4>
          <button class="pill-transparent" onclick="fuentesCalc()">Calc</button>
        </div>
        <hr/>
        <div class="header-table">
          <div class="inputs">
            <div class="input-row">
              <span>Nitrogeno Solido</span>
              <select class="screen" id="src-n-solid" name="src-n-solid">
                <option value="urea">UREA</option>
                <option value="ansca">Ansca</option>
                <option value="namonio">Nit. Amonio</option>
                <option value="ansul">Ansul</option>
                <option value="can">CAN</option>
                <option value="sulfamonio">Sulfato Amonio</option>
                <option value="zurko">Zurko 27-3</option>
                <option value="solmix285">Solmix 28-5</option>
                <option value="solmix259">Solmix 25-9</option>
              </select>
            </div>
            <div class="input-row">
              <span>Fósforo</span>
              <select class="screen" id="src-fosforo" name="src-fosforo">
                <option value="supertrip">Super Triple</option>
                <option value="supersim">Super Simple</option>
                <option value="dap">DAP</option>
                <option value="map">MAP</option>
                <option value="micromag">Micro Magnum</option>
                <option value="maps">MAP-S</option>
                <option value="rocafos">Roca Fósfórica</option>
                <option value="monok">Fosf. Mono K</option>
                <option value="acfosf">Ac. Fosfórico</option>
              </select>
            </div>
            <div class="input-row">
              <span>Potasio</span>
              <select class="screen" id="src-potasio" name="src-potasio">
                <option value="nitpotasio">Nit. Potasio</option>
                <option value="sulfpotasio">Sulf. Potasio</option>
                <option value="clopotasio">Cloruro Potasio</option>
                <option value="sulpomag">SulPoMag</option>
              </select>
            </div>
            <div class="input-row">
              <span>Azufre</span>
              <select class="screen" id="src-azufre" name="src-azufre">
                <option value="ansul">Ansul</option>
                <option value="sulfamonio">Sulfato Amonio</option>
                <option value="azelemental">Az. Elemental</option>
                <option value="tiosulfamonio">Tiosulf. Amonio</option>
                <option value="yeso">Yeso</option>
                <option value="ansca">Ansca</option>
                <option value="sulfpotasio">Sulf. Potasio</option>
                <option value="solmix285">Solmix 28-5</option>
                <option value="solmix259">Solmix 25-9</option>
              </select>
            </div>
            <div class="input-row">
              <span>Zinc</span>
              <select class="screen" id="src-zinc" name="src-zinc">
                <option value="stollerzn">STOLLER Zn</option>
                <option value="zintrac">Zintrac</option>
                <option value="zurconszn">Zurko NSZn</option>
                <option value="sulfzinc">Sulf. Zinc</option>
                <option value="valagrozn">Valagro Zn</option>
              </select>
            </div>
          </div>
        </div>
        <div class="table-calc" id="sourceResults" hidden>
          <div class="left-side">
            <span class="field"><i class="fa fa-cash" aria-hidden="true"></i> Precio</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Nitrogeno</span>
            <!-- <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Fosforo</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Potasio</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Azufre</span>
            <span class="field"><i class="fa fa-flask" aria-hidden="true"></i> Zinc</span> -->
          </div>
          <div class="right-side">
            <div><span class="value" id="precioRes"></span><span class="unit">USD/Tn</span></div>
            <div><span class="value" id="nSourceResult"></span><span class="unit">kg/ha</span></div>
            <!-- <div><span class="value" id="pSourceResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="kSourceResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="sSourceResult"></span><span class="unit">kg/ha</span></div>
            <div><span class="value" id="znSourceResult"></span><span class="unit">kg/ha</span></div> -->
          </div>
        </div>
          <!-- <div class="buttons">
            <button class="pill-transparent" onclick="getAmountResults()">Calc</button>
            <button class="pill-yellow" onclick="cleanAmountResults()"><i class="fa fa-refresh"></i></button>
          </div> -->
        </div>
      </div>
    </div>
    <script src="main.js" async defer></script>
  </body>
</html>