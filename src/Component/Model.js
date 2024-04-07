import React, { useRef, useLayoutEffect } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Model.glb");
  const model = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(model.current.rotation, { y: -1 }, 2)
      .to(model.current.position, { x: 1 }, 2);
  }, []);

  return (
    <group {...props} dispose={null} ref={model}>
      <group
        position={[7.767, 1.453, 2.2]}
        rotation={[Math.PI / 2, 0, 1.577]}
        scale={1.341}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_1.geometry}
          material={materials["part_1:RMP_14P_HT:mat3.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_2.geometry}
          material={materials["part_1:mesh19SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_3.geometry}
          material={materials["part_1:mesh11SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_4.geometry}
          material={materials["part_1:mesh23SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_5.geometry}
          material={materials["part_1:mesh18SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_6.geometry}
          material={materials["part_1:mesh2SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_7.geometry}
          material={materials["part_1:mesh14SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_8.geometry}
          material={materials["part_1:mesh24SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_9.geometry}
          material={materials["part_1:mesh6SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_10.geometry}
          material={materials["part_1:mesh13SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_11.geometry}
          material={materials["part_1:mesh16SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_12.geometry}
          material={materials["part_1:mesh10SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_13.geometry}
          material={materials["part_1:mesh21SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_14.geometry}
          material={materials["part_1:mesh17SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_15.geometry}
          material={materials["part_1:mesh22SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_16.geometry}
          material={materials["part_1:mesh4SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_17.geometry}
          material={materials["part_1:mesh1SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_18.geometry}
          material={materials["part_1:mesh20SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_19.geometry}
          material={materials["part_1:mesh15SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_20.geometry}
          material={materials["part_1:mesh8SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_21.geometry}
          material={materials["part_1:mesh5SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_22.geometry}
          material={materials["part_1:mesh9SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_23.geometry}
          material={materials["part_1:mesh12SG.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.node_24.geometry}
          material={materials["part_1:mesh3SG.001"]}
        />
      </group>
      <group
        position={[-0.571, 1.019, -0.284]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.209}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_1.geometry}
          material={materials["part_1:mesh4SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_2.geometry}
          material={materials["part_1:mesh2SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_3.geometry}
          material={materials["part_1:mesh10SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_4.geometry}
          material={materials["part_1:mesh3SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_5.geometry}
          material={materials["part_1:mesh13SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_6.geometry}
          material={materials["part_1:mesh12SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_7.geometry}
          material={materials["part_1:mesh8SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_8.geometry}
          material={materials["part_1:mesh6SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_9.geometry}
          material={materials["part_1:mesh9SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_10.geometry}
          material={materials["part_1:mesh5SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_11.geometry}
          material={materials["part_1:mesh11SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_12.geometry}
          material={materials["part_1:mesh1SG2.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buck_13.geometry}
          material={materials["part_1:mesh7SG1.001"]}
        />
      </group>
      <group
        position={[-7.353, 7.413, -5.284]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.374}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buzzer_1.geometry}
          material={materials["part_1:RMP_14P_HT:mat3.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buzzer_2.geometry}
          material={materials["part_1:RMP_14P_HT:mat1.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.buzzer_3.geometry}
          material={materials["part_1:RMP_14P_HT:mat5.001"]}
        />
      </group>
      <group position={[3.014, 2.659, -6.341]} scale={1.331}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_1.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0321FBXASC032DHT22FBXASC032Module"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_2.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0322FBXASC032DHT22FBXASC032Module"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_3.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0323FBXASC032DHT22FBXASC032Module"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_4.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0324FBXASC032DHT22FBXASC032Module"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_5.geometry}
          material={
            materials["part_1:FBXASC032meshFBXASC0321FBXASC032gasSG.001"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_6.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0323FBXASC032CortarFBXASC045Extru.002"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_7.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0324FBXASC032CortarFBXASC045Extru.002"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_8.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0325FBXASC032SalienteFBXASC045Ext.002"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_9.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0326FBXASC032CortarFBXASC045Extru.002"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_10.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0327FBXASC032SalienteFBXASC045Ext.002"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_11.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0328FBXASC032SalienteFBXASC045Ext"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_12.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0329FBXASC032Redondeo7FBXASC032fa.002"
            ]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_13.geometry}
          material={
            materials["part_1:FBXASC032meshFBXASC0322FBXASC032Redondeo7SG.001"]
          }
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.dht_14.geometry}
          material={
            materials[
              "part_1:FBXASC032meshFBXASC0322FBXASC032Redondeo7_1SG.001"
            ]
          }
        />
      </group>
      <group
        position={[-6.235, 1.914, -2.635]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.793}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_1"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_13SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_2"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_5SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_3"].geometry}
          material={materials["part_2:PHFBXASC0454502CSG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_4"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_12SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_5"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_1SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_6"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_8SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_7"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_11SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_8"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_2SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_9"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_9SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_10"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_3SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_11"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_7SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_12"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_6SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_13"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_4SG"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["ph-p1_14"].geometry}
          material={materials["part_2:PHFBXASC0454502C_ncl1_10SG"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[4.909, 0.298, -0.231]}
        scale={[8.225, 0.111, 5.58]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.port.geometry}
        material={materials["part_1:blinn9SG.001"]}
        position={[-3.163, 1.295, 6.739]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.899}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom.geometry}
        material={materials.box}
        position={[1.94, 7.917, -0.136]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={145.131}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top.geometry}
        material={materials.box}
        position={[1.466, 7.185, -0.328]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={145.131}
      />
      <group
        position={[-23.416, 2.177, -2.431]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={-141.072}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PROBE_1.geometry}
          material={materials["1.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PROBE_2.geometry}
          material={materials["2.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PROBE_3.geometry}
          material={materials["3.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PROBE_4.geometry}
          material={materials["4.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PROBE_5.geometry}
          material={materials["5.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PROBE_6.geometry}
          material={materials["6.001"]}
        />
      </group>
      <group
        position={[1.94, 7.011, 3.927]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={147.679}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001"].geometry}
          material={materials["2.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_1"].geometry}
          material={materials["3.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_2"].geometry}
          material={materials["4.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_3"].geometry}
          material={materials["5.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_4"].geometry}
          material={materials["6.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_5"].geometry}
          material={materials["7.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_6"].geometry}
          material={materials["8.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_7"].geometry}
          material={materials["9.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_8"].geometry}
          material={materials["10"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_9"].geometry}
          material={materials["2.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_10"].geometry}
          material={materials["11"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["1602_Serial_LCD_Module_Display001_11"].geometry}
          material={materials["12"]}
        />
      </group>
      <group
        position={[-3.204, 2.698, -7.223]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={-106.37}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.led_1.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.led_2.geometry}
          material={materials["2.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.led_3.geometry}
          material={materials["3.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.led_4.geometry}
          material={materials["4.004"]}
        />
      </group>
      <group
        position={[9.493, 2.566, -7.273]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={149.721}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gas_1.geometry}
          material={materials["1.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gas_2.geometry}
          material={materials["2.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gas_3.geometry}
          material={materials["3.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gas_4.geometry}
          material={materials["4.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gas_5.geometry}
          material={materials["5.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gas_6.geometry}
          material={materials["6.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.gas_7.geometry}
          material={materials["7.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["lcd-cabel"].geometry}
        material={materials.cabel}
        position={[1.95, 0, 16.752]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DHT_Cabel.geometry}
        material={materials.cabel}
        position={[1.95, -0.913, 16.277]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.gas_cabel.geometry}
        material={materials.cabel}
        position={[1.95, 0, 16.397]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ph_cabel.geometry}
        material={materials.cabel}
        position={[1.95, 0, 16.397]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.power_cabel.geometry}
        material={materials.cabel}
        position={[-2.912, 0.828, 5.431]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Light_cabel.geometry}
        material={materials.cabel}
        position={[1.95, 0, 16.397]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.byzer_cabel.geometry}
        material={materials.cabel}
        position={[1.95, 0, 16.397]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ph_probe_cabel.geometry}
        material={materials.cabel}
        position={[1.94, 0, 16.36]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.cabel}
        position={[-6.297, 2.701, -7.438]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["#8_Wood_Screw_3in"].geometry}
        material={materials["1.006"]}
        position={[13.868, 8.031, -6.342]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[96.003, 96.003, 56.396]}
      />
    </group>
  );
}

useGLTF.preload("/Model.glb");