/*
 * Copyright (c) 2014. Kleomenis Katevas
 * Kleomenis Katevas, k.katevas@imperial.ac.uk
 *
 * This file is part of SensingKit-Android library.
 * For more information, please visit http://www.sensingkit.org
 *
 * SensingKit-Android is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * SensingKit-Android is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with SensingKit-Android.  If not, see <http://www.gnu.org/licenses/>.
 */

package org.sensingkit.sensingkitlib.sensors;

import android.content.Context;
import android.hardware.SensorEvent;
import androidx.annotation.NonNull;

import org.sensingkit.sensingkitlib.SKException;
import org.sensingkit.sensingkitlib.SKSensorType;
import org.sensingkit.sensingkitlib.configuration.SKConfiguration;
import org.sensingkit.sensingkitlib.configuration.SKStepCounterConfiguration;
import org.sensingkit.sensingkitlib.data.SKAbstractData;
import org.sensingkit.sensingkitlib.data.SKStepCounterData;

public class SKStepCounter extends SKAbstractNativeSensor {

    @SuppressWarnings("unused")
    private static final String TAG = SKStepCounter.class.getSimpleName();

    public SKStepCounter(final @NonNull Context context, final @NonNull SKStepCounterConfiguration configuration) throws SKException {
        super(context, SKSensorType.STEP_COUNTER, configuration);
    }

    @Override
    @NonNull
    protected SKAbstractData buildData(final @NonNull SensorEvent event) {
        return new SKStepCounterData(System.currentTimeMillis(), (int)event.values[0]);
    }

    @Override
    @NonNull
    public SKConfiguration getConfiguration() {
        return new SKStepCounterConfiguration((SKStepCounterConfiguration)mConfiguration);
    }

    @Override
    protected boolean shouldPostSensorData(final @NonNull SKAbstractData data) {

        // Always post sensor data
        return true;
    }

}
